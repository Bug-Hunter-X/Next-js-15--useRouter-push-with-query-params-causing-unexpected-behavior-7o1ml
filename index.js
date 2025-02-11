```javascript
// pages/about.js
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();

  const handleClick = () => {
    // Redirect to home page with a query parameter. Using the correct push method
    router.push({ pathname: '/', query: { name: 'John Doe' } }, undefined, { shallow: true });
  };

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={handleClick}>Go to Home with Query</button>
    </div>
  );
}
```
```javascript
//pages/index.js
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const { name } = router.query;
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      {name && <p>Hello, {name}!</p>}
    </div>
  );
}
```