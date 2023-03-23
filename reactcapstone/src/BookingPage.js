import Title from './Title';
import BookingForm from './BookingForm';

function BookingPage({availabletimes, settimes}) {
    return (
      <>
        <Title />
        <BookingForm availabletimes={availabletimes} settimes={settimes}/>
      </>
    );
  }
  export default BookingPage;