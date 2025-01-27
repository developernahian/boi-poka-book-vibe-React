import bannerImg from '../../assets/books.jpg';

const Banner = () => {
    return (
        <div>


            {/* daisuUI */}
            <div className="hero bg-base-200 min-h-[500px]">
                <div className="hero-content flex-col lg:flex-row-reverse lg:px-14">
                    <img
                        src={bannerImg}
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold pb-10">Books to freshen up your bookshelf</h1>
                        
                        <button className="btn text-white bg-green-500">View The List</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Banner;