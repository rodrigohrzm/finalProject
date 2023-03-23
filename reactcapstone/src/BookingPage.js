import Title from './Title';
import BookingForm from './BookingForm';

function BookingPage({availabletimes}) {
    return (
      <>
        <Title />
        <BookingForm availabletimes={availabletimes}/>
      </>
    );
  }
  export default BookingPage;