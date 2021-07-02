import { render, screen, cleanup } from '@testing-library/react';
import NavItem from './nav-item';

describe('Given <NavItem />', () => {
  let name: string;
  let isActive: boolean;

  afterEach(() => {
    cleanup();
  });

  describe('When given a valid name and is not active', () => {
    beforeEach(() => {
      name = 'Marklar';
      isActive = false;
      render(<NavItem name={name} isActive={isActive} />);
    });
    it('Should display name as black text', () => {
      const navItem = screen.getByText('Marklar');
      expect(navItem).toBeInTheDocument();
      expect(navItem.className.includes('text-black')).toBeTruthy();
    });
  });

  describe('When given a valid name and is active', () => {
    beforeEach(() => {
      name = 'Marklar';
      isActive = true;
      render(<NavItem name={name} isActive={isActive} />);
    });
    it('Should display name as tangerine text', () => {
      const navItem = screen.getByText('Marklar');
      expect(navItem).toBeInTheDocument();
      expect(navItem.className.includes('text-tangerine')).toBeTruthy();
    });
  });
});
