//Sidebar.jsx
import React from 'react';
import FiltersSection from './FiltersSection/FiltersSection';
import WorkoutSection from './WorkoutSection/WorkoutSection';
import QuoteOfTheDay from './QuoteOfTheDay/QuoteOfTheDay';
import { SidebarContainer } from './Sidebar.styled';

const Sidebar = ({
  onApplyFilters,
  filterTitle,
  setFilterTitle,
  filterAuthor,
  setFilterAuthor,
}) => {
  return (
    <SidebarContainer>
      <FiltersSection
        onApplyFilters={onApplyFilters}
        filterTitle={filterTitle}
        setFilterTitle={setFilterTitle}
        filterAuthor={filterAuthor}
        setFilterAuthor={setFilterAuthor}
      />
      <WorkoutSection />
      <QuoteOfTheDay />
    </SidebarContainer>
  );
};

export default Sidebar;
