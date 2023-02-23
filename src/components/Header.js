import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { SEARCH_SUGGESTIONS_API_KEY } from "../utils/Constants";

export const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();
  const toggleSidebar = () => {
    dispatch(toggleMenu());
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      getSuggestions();
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  const getSuggestions = async () => {
    const data = await fetch(SEARCH_SUGGESTIONS_API_KEY + searchQuery);
    const json = await data.json();
    console.log(json[1]);
    setSuggestions(json[1]);
  };
  return (
    <>
      <div className="p-3 shadow-lg flex justify-between">
        <div className="flex">
          <img
            onClick={() => toggleSidebar()}
            className="h-8 cursor-pointer"
            alt="menu"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
          />
          <a href="/">
            <img
              className="h-8 mx-2"
              alt="youtube-logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
            />
          </a>
        </div>
        <div>
          <input
            type="text"
            className="w-72 p-1 px-2 border rounded-l-full border-gray-400"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 rounded-r-full p-1">
            Search
          </button>
          {showSuggestions && (
            <div className="p-2 m-2 rounded-lg w-72 shadow-lg bg-white border border-gray-200 absolute">
              <ul>
                {suggestions?.map((result) => (
                  <li
                    className="shadow-sm px-2 py-2 hover:bg-gray-100"
                    key={result}
                  >
                    🔍{result}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div>
          {" "}
          <img
            className="h-8"
            alt="user"
            src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          />
        </div>
      </div>
    </>
  );
};
