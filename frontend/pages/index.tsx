import { NextPage } from "next";
import Link from "next/link";
import Layout from "../components/layout";
import useApiData from "../hooks/use-api-data";
import Airport from "../types/airport";
import { useEffect, useState } from "react";

const PATH = "/api/airports";
const Page: NextPage = () => {
  const [query, setQuery] = useState("");
  const airports = useApiData<Airport[]>(`${PATH}?search=${query}`, []);
  const [results, setResult] = useState(airports);

  useEffect(() => {
    setResult(airports);
  }, [airports]);

  return (
    <Layout>
      <h1 className="text-2xl font-bold">Code Challenge: Airports</h1>

      <h2 className="mt-10 text-xl font-semibold">
        Airports{" "}
        <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
          {results.length}
        </span>
      </h2>

      <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        Search
      </label>
      <div className="relative">
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search by Name, City, Country or IATA"
          required
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setQuery(e.target.value);
            }
          }}
        />
      </div>

      <div>
        {results.map((airport) => (
          <Link
            className="flex items-center p-5 mt-5 text-gray-800 border border-gray-200 rounded-lg shadow-sm hover:border-blue-600 focus:border-blue-600 focus:ring focus:ring-blue-200 focus:outline-none"
            href={`/airports/${airport.iata.toLowerCase()}`}
            key={airport.iata}
          >
            <span>
              {airport.name}, {airport.city}
            </span>
            <span className="ml-auto text-gray-500">{airport.country}</span>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default Page;
