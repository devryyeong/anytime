import React from 'react';
import Link from 'next/link';

const data = ['A', 'B', 'C']
const Header = () => {
  return (
    <div className="p-8 bg-indigo-400 flex flex-col">
      <Link href="/" className="mb-5">HOME</Link>
      <Link href="/list">List</Link>
    </div>
  );
}

export default Header;
