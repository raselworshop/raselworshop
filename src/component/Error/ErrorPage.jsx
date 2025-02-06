// src/ErrorPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg animate-pulse">
        <h1 className="text-9xl font-bold text-gray-800 animate-bounce">404</h1>
        <p className="text-3xl text-gray-600">Oops! Page not found.</p>
        <p className="text-lg text-gray-500 mt-2">It seems the page you were looking for doesn't exist.</p>
        <Link to={'/'} color="primary" className="mt-4 btn btn-wide btn-outline btn-accent">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
