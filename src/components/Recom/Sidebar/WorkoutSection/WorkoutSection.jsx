//WorkoutSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import {
  WorkoutSectionContainer,
  WorkoutTitle,
  WorkoutStep,
  WorkoutIcon,
  WorkoutDescription,
  MyLibraryBlok,
  MyLibraryLink,
  Arrow,
} from './WorkoutSection.styled';
import leftarrow from '../../../../assets/svg/login.svg';

const WorkoutSection = () => {
  return (
    <WorkoutSectionContainer>
      <WorkoutTitle>Start your workout</WorkoutTitle>
      <WorkoutStep>
        <WorkoutIcon>1</WorkoutIcon>
        <WorkoutDescription>
          Create a personal library:{' '}
          <span>add the books you intend to read to it.</span>
        </WorkoutDescription>
      </WorkoutStep>
      <WorkoutStep>
        <WorkoutIcon>2</WorkoutIcon>
        <WorkoutDescription>
          Create your first workout:{' '}
          <span>define a goal, choose a period, start training.</span>
        </WorkoutDescription>
      </WorkoutStep>
      <Link to="/library">
        <MyLibraryBlok>
          <MyLibraryLink>My library</MyLibraryLink>
          <Arrow src={leftarrow} alt="left arrow" />
        </MyLibraryBlok>
      </Link>
    </WorkoutSectionContainer>
  );
};

export default WorkoutSection;
