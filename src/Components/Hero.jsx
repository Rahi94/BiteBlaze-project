import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold">Welcome To Biteblaze</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <div>
            <Link to='/blogs' className="btn mr-3 btn-primary">Read blogs</Link>
            
            <Link to='/bookmarks' className="btn btn-primary">Bookmarks</Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Hero;