import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Seo from "../components/Seo";

const Home: NextPage = ({ results }: any) => {
  return (
    <div>
      <Seo title="Home" />
      {results?.map((i: any) => (
        <div className="movie" key={i.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${i.poster_path}`} />
          <h4>{i.original_title}</h4>
        </div>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export async function getServerSideProps() {
  const { results } = await (
    await fetch(`http://localhost:3000/api/movies`)
  ).json();
  return {
    props: {
      results,
    },
  };
}

export default Home;
