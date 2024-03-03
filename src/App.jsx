import { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import "./style/home.scss";
import "./App.css";
import { Loading } from "./Loading/Loading";
import { Heart } from "./Icon/Heart";
import { Header } from "./Header/Header";

function App() {
  const [unsplash, setUnsplash] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Unsplash Api fetch request

  const fetchUnsplash = async () => {
    setLoading(true);
    try {
      const result = await fetch(
        "https://api.unsplash.com/photos/random?count=20&client_id=3Gd1Vb-N_qaYYkopP_zG6HNM5MV167DA9UOOuaXqDTU"
      );
      const dataResult = await result.json();
      setUnsplash(dataResult);
      console.log(dataResult);
    } catch (error) {
      setError("You're offline");
      console.error("Error fetching photos", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUnsplash();
  }, []);

  const renderImages = () => {
    if (loading) {
      return <Loading />;
    }

    if (error) {
      return (
        <>
          <h1>No internet</h1>
        </>
      );
    }

    return (
      <>
        <Header />
        <section>
          {unsplash.length > 0 ? (
            <Masonry
              breakpointCols={{ default: 3, 1100: 3, 700: 2, 500: 1 }}
              className="photo-gallery"
            >
              {unsplash.map((photo) => (
                <div key={photo.id} className="photo-item">
                  <img src={photo.urls.full} alt={photo.alt_description} />
                  <div className="overlay">
                    <div className="profile-info">
                      <img
                        src={photo.user.profile_image.medium}
                        alt="profile-photos"
                      />
                      <div className="profile-detail">
                        <div className="text">
                          <p>{photo.user.username}</p>
                          <h5>Available for hire</h5>
                          <h1>{photo.user.for_hire}</h1>
                        </div>
                        <div className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24"
                            viewBox="0 -960 960 960"
                            width="24"
                          >
                            <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <Heart />
                  </div>
                  
                </div>
              ))}
            </Masonry>
          ) : (
            <div></div>
          )}
        </section>
      </>
    );
  };
  return <>{renderImages()}</>;
}

export default App;
3;
