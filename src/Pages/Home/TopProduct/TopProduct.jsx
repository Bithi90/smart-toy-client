import image1 from '../../../assets/81t2O0EbsiL.jpg';
import image2 from '../../../assets/84AAAA77_1.jpg';
import image3 from '../../../assets/21090770_fpx.jpg';
import image4 from '../../../assets/download (3).jpg';
import image5 from '../../../assets/download (4).jpg';
import image6 from '../../../assets/download (5).jpg';
import image7 from '../../../assets/images (4).jpg';
import image8 from '../../../assets/images (5).jpg';
import image9 from '../../../assets/images (6).jpg';

const TopProduct = () => {
    return (

        <div className=''>
            <div>
                <h2 className='text-center text-5xl my-16 font-bold text-pink-900'>Some Popular Product</h2>
            </div>
            <div className=''>
                <div className='justify-items-center bg-base-100 grid grid-cols-1 lg:grid-cols-3  '>
                    <img className='w-96 h-96 drop-shadow-lg border-2 border-slate-100' src={image1} alt="" />
                    <img className='w-96 h-96 drop-shadow-lg border-2 border-slate-100' src={image2} alt="" />
                    <img className='w-96 h-96 drop-shadow-lg border-2 border-slate-100' src={image3} alt="" />
                    <img className='w-96 h-96 drop-shadow-lg border-2 border-slate-100' src={image4} alt="" />
                    <img className='w-96 h-96 drop-shadow-lg border-2 border-slate-100' src={image5} alt="" />
                    <img className='w-96 h-96 drop-shadow-lg border-2 border-slate-100' src={image6} alt="" />
                    <img className='w-96 h-96 drop-shadow-lg border-2 border-slate-100' src={image7} alt="" />
                    <img className='w-96 h-96 drop-shadow-lg border-2 border-slate-100' src={image8} alt="" />
                    <img className='w-96 h-96 drop-shadow-lg border-2 border-slate-100' src={image9} alt="" />
                </div>
            </div>
        </div>
    );
};

export default TopProduct;