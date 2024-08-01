// custom hooks
import { useFetch } from "../hooks/useFetch";

// rrd imports
import { Link } from "react-router-dom";

function MenuLinks() {
  const {
    data: quizzes,
    error,
    isPending,
  } = useFetch(
    "https://online-json-server-api.up.railway.app/project/66ab3c611d2cd3eb1145ce19/quizzes"
  );
  return (
    <div>
      {isPending && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="menu-list">
        {quizzes &&
          quizzes.data.map((item) => {
            return (
              <Link
                className="menu-item header-logo"
                to={`/quiz/${item.title}`}
                key={item.title}
              >
                <figure style={{ backgroundColor: item.color }}>
                  <img src={item.icon} alt={item.title} width={60} height={60}/>
                </figure>
                <span>{item.title}</span>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default MenuLinks;
