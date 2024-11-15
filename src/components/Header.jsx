import banner from'../assets/logo.png'
import moment from 'moment';

const Header = () => {
  return (
    <div className='mt-5 space-y-3 font-poppins'>
      <img className='mx-auto w-[300]' src={banner} alt="" />
      <h2 className=' text-center text-base text-gray-400'>Journalism Without Fear or Favour</h2>
     <p className='text-center text-gray-600'>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
    </div>
  );
};

export default Header;