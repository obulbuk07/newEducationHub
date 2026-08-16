import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import pagesData from "../result.json";

function ContentPage() {
  const { id } = useParams(); // useParams повертає значення з URL, наприклад "0"

  // Шукаємо за ключем `index`, приводячи обидва значення до Number
  const currentPage = pagesData.find((item) => Number(item.index) === Number(id));

  const elements = currentPage?.elements || [];
  const title = currentPage?.title || "";

  const renderElement = (element) => {
    switch (element.type) {
      case 'h1':
        return <h1 key={element.index} className="text-2xl text-center font-bold my-4">{element.value}</h1>;

      case 'p':
        return <p key={element.index} className="my-2 text-gray-800 leading-relaxed">{element.value}</p>;

      case 'img':
        return (
          <img 
            key={element.index} 
            src={element.value} 
            alt={`Зображення ${element.index}`} 
            className="my-4 rounded-lg max-w-full h-auto shadow"
          />
        );

      case 'a':
        return (
          <a 
            key={element.index} 
            href={element.value} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 underline block my-2 hover:text-blue-800 break-all"
          >
            {element.value}
          </a>
        );

      case 'iframe':
        return (
          <div key={element.index} className="my-4 aspect-video w-4/4 h-120">
            <iframe
              src={element.value}
              title={`Відео ${element.index}`}
              className="w-3/4 h-100 rounded-lg mx-auto shadow"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div>
      <NavBar />
      <div className="w-3/4 mx-auto pt-30 min-h-screen">

        {elements.length > 0 ? (
          elements.map((element) => renderElement(element))
        ) : (
          <p className="text-gray-500">Контент для цієї сторінки не знайдено в JSON.</p>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default ContentPage;