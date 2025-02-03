// src/pages/CityPage.tsx
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { loadCities, setSearchQuery, setCurrentPage } from '../entities/city/citySlice';
import { City } from '../api/cityApi';

const CityPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { cities, loading, error, searchQuery, currentPage } = useAppSelector((state) => state.city);

  useEffect(() => {
    dispatch(loadCities());
  }, [dispatch]);

  // Фильтрация городов по поисковому запросу
  const filteredCities = cities.filter((city: City) =>
    city.name.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  // Пагинация: отображаем 10 городов на страницу
  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedCities = filteredCities.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(filteredCities.length / itemsPerPage);

  return (
    <div className="city-page">
      <h1>Города</h1>
      <input
        type="text"
        placeholder="Поиск городов..."
        value={searchQuery}
        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
      />
      {loading && <p>Загрузка...</p>}
      {error && <p style={{ color: 'red' }}>Ошибка: {error}</p>}
      {!loading && paginatedCities.length === 0 && <p>Нет городов для отображения.</p>}
      <ul>
        {paginatedCities.map((city: City) => (
          <li key={city.id}>
            {city.name} (Салоны: {city.count_salons}, Мастера: {city.count_masters})
          </li>
        ))}
      </ul>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => dispatch(setCurrentPage(index + 1))}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CityPage;
