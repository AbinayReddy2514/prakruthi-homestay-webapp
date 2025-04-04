
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { format } from 'date-fns';
import type { Database } from '@/integrations/supabase/types';

type Booking = {
  id: string;
  name: string;
  phone: string;
  check_in: string;
  check_out: string;
  rooms: string;
  guests: string;
  status: string;
  created_at: string;
};

const AdminDashboard = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Check if admin is logged in
    const adminUsername = localStorage.getItem('adminUsername');
    if (!adminUsername) {
      navigate('/admin');
      return;
    }
    
    fetchBookings();
  }, [navigate]);

  const fetchBookings = async () => {
    try {
      const { data, error } = await supabase
        .from('bookings')
        .select('*')
        .order('created_at', { ascending: false });
        
      if (error) throw error;
      
      setBookings(data || []);
    } catch (error) {
      console.error('Error fetching bookings:', error);
      toast({
        title: 'Error',
        description: 'Failed to load bookings',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleStatusChange = async (id: string, status: string) => {
    try {
      const { error } = await supabase
        .from('bookings')
        .update({ status })
        .eq('id', id);
        
      if (error) throw error;
      
      setBookings(bookings.map(booking => 
        booking.id === id ? { ...booking, status } : booking
      ));
      
      toast({
        title: 'Status Updated',
        description: `Booking status updated to ${status}`,
      });
    } catch (error) {
      console.error('Error updating status:', error);
      toast({
        title: 'Update Failed',
        description: 'Failed to update booking status',
        variant: 'destructive',
      });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminUsername');
    navigate('/admin');
  };

  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), 'PPP');
    } catch (error) {
      return dateString;
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Booking Management</h1>
        <Button 
          onClick={handleLogout}
          variant="outline"
        >
          Logout
        </Button>
      </div>
      
      {isLoading ? (
        <div className="text-center py-10">Loading bookings...</div>
      ) : bookings.length === 0 ? (
        <div className="text-center py-10">No bookings found</div>
      ) : (
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Check-in</TableHead>
                <TableHead>Check-out</TableHead>
                <TableHead>Rooms</TableHead>
                <TableHead>Guests</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell>{booking.name}</TableCell>
                  <TableCell>{booking.phone}</TableCell>
                  <TableCell>{formatDate(booking.check_in)}</TableCell>
                  <TableCell>{formatDate(booking.check_out)}</TableCell>
                  <TableCell>{booking.rooms}</TableCell>
                  <TableCell>{booking.guests}</TableCell>
                  <TableCell>{formatDate(booking.created_at)}</TableCell>
                  <TableCell>
                    <span 
                      className={`inline-block px-2 py-1 rounded text-xs font-semibold ${
                        booking.status === 'confirmed' 
                          ? 'bg-green-100 text-green-800' 
                          : booking.status === 'cancelled' 
                          ? 'bg-red-100 text-red-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {booking.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Select
                      defaultValue={booking.status}
                      onValueChange={(value) => handleStatusChange(booking.id, value)}
                    >
                      <SelectTrigger className="w-[130px]">
                        <SelectValue placeholder="Change status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="confirmed">Confirm</SelectItem>
                        <SelectItem value="cancelled">Cancel</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
