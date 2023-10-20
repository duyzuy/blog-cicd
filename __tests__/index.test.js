import { render, screen } from '@testing-library/react'
import Homepage from '../pages/index'
import { getAllPosts } from '../lib/api'
import '@testing-library/jest-dom'
 
describe('Home', () => {
    test('the data is peanut butter', () => {
        return getAllPosts(["title", "date", "slug", "author", "coverImage", "excerpt"]).then(data => {
          expect(data).toBeDefined();
        });
      });
})

