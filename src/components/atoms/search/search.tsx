'use client'
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { useRouter, useSearchParams } from 'next/navigation';

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid rgb(229, 231, 235);
  border-radius: 30px;
  padding: 3px 10px;
  width: fit-content;
  background-color: rgb(255, 255, 255);
`;

const SearchInput = styled.input`
  font-size: 12px;
  border: none;
  outline: none;
  padding: 2px;
  border-radius: 30px;
  width: 160px;
  margin-right: 10px;

  &::placeholder {
    color: rgb(107, 114, 128);
  }
`;

const IconContainer = styled.div`
  font-size: 12px;
  cursor: pointer;
  color: rgb(107, 114, 128);
`;


export function SearchComponent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleChange = (searchTerm: string) => {
    setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());
      params.set('name', searchTerm);
      router.push(`?${params.toString()}`);
    }, 500);
  }

  return (
    <SearchContainer>
      <IconContainer>
        <FaSearch />
      </IconContainer>
      <SearchInput
        type="text"
        placeholder="Buscar..."
        onChange={(e) => handleChange(e.target.value)}
      />
    </SearchContainer>
  );
}
