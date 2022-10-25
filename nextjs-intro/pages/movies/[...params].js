import { useRouter } from "next/router";
import Seo from "../../components/Seo";

export default function Detail({ results }) {
  const router = useRouter();

  console.log(results);

  return (
    <div>
      <Seo title={results.original_title} />
      <div className="container">
        <div>
          <img src={`https://image.tmdb.org/t/p/w500/${results.poster_path}`} />
        </div>
        <div>
          <h4>{results.original_title}</h4>
          <p>
            <b>개요</b>
            <span> {results.genres.map((movie) => `${movie.name},`)}</span>
          </p>
          <p>
            <b>개봉</b>
            <span> {results.release_date}</span>
          </p>
          <p>
            <b>평점</b>
            <span> ⭐️ {results.vote_average.toFixed(1)}</span>
          </p>
          <p>
            <b>상영시간</b>
            <span> {results.runtime}분</span>
          </p>
          <p className="overview">{results.overview}</p>
        </div>
      </div>
      <div>
        <h5>production_companies</h5>
        <ul>
          {results.production_companies.map((company) => (
            <li>
              <p>{company.name}</p>
              {company.logo_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${company.logo_path}`}
                />
              ) : (
                <span className="no_img">No img</span>
              )}
            </li>
          ))}
        </ul>
      </div>
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
          font-size: 14px;
        }
        .container img {
          max-width: 100%;
        }
        .container p b {
          margin-right: 5px;
        }
        .container p.overview {
          font-size: 13px;
          line-height: 1.4;
        }
        h4 {
          font-size: 24px;
          margin-top: 0;
          margin-bottom: 30px;
        }
        h5 {
          padding: 0 20px;
          font-size: 20px;
          margin-top: 10px;
          margin-bottom: 10px;
        }
        ul {
          padding: 0 20px;
          list-style: none;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
        ul img {
          max-width: 100%;
          box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
          padding: 10px;
        }
        span.no_img {
          display: block;
          width: 100%;
          background-color: #dfdfdf;
          text-align: center;
          padding: 30px 0;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps({ params: { params } }) {
  const id = params[1];
  const result = await fetch(
    `https://nextjsstartss.vercel.app/api/movies/${id}`
  );
  const results = await result.json();
  return {
    props: { results },
  };
}
