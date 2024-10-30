'use client'
import { SearchComponent } from "@/components/atoms/search/search";
import SwitchComponent from "@/components/atoms/switch/switch";
import { Suspense } from "react";
import { FaBuilding, FaSuitcase } from "react-icons/fa";
import styled from "styled-components";


const StyledNavbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
export function NavbarComponent() {

    const handleSwitchChange = (selectedIndex: number) => {
        console.log('Switch changed to:', selectedIndex);
    };

    function SearchBarFallback() {
        return <>Loading...</>
    }
    return (
        <StyledNavbar>
            <SwitchComponent
                options={[
                    { label: 'Vacantes', icon: <FaSuitcase /> },
                    { label: 'Compañías', icon: <FaBuilding /> },
                ]}
                onChange={handleSwitchChange}
            />
            <Suspense fallback={<SearchBarFallback />}>
                <SearchComponent />
            </Suspense>
        </StyledNavbar>
    );
}