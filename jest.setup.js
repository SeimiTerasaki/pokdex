import '@testing-library/jest-dom/extend-expect';
import React, { Component } from 'react';

jest.mock('react-chartjs-2', () => ({
    Bar: () => null
  }));