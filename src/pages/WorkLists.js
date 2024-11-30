import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styling/workLists.css";
import logo from './assets/logo.svg';
import arrowBack from './assets/arrow-left.svg';
import Table from "../components/Table";

const headers = ['Battery ID', 'To-Do Datum', 'Aanleiding', 'Merk', 'Type', 'Bouwjaar'];

// Dummy data
const data = [
  {
    'Battery ID': 'BAT013',
    'To-Do Datum': '2024-11-20',
    Aanleiding: 'Ongeval',
    Merk: 'Audi',
    Type: 'E-Tron',
    Bouwjaar: 2020,
  },
  {
    'Battery ID': 'BAT014',
    'To-Do Datum': '2024-11-22',
    Aanleiding: 'Doorverkoop',
    Merk: 'BMW',
    Type: 'I3',
    Bouwjaar: 2019,
  },
  {
    'Battery ID': 'BAT015',
    'To-Do Datum': '2024-12-01',
    Aanleiding: 'Leeftijd',
    Merk: 'Volkswagen',
    Type: 'E-Golf',
    Bouwjaar: 2017,
  },
  {
    'Battery ID': 'BAT016',
    'To-Do Datum': '2024-12-10',
    Aanleiding: 'Ongeval',
    Merk: 'Tesla',
    Type: 'Model 3',
    Bouwjaar: 2021,
  },
  {
    'Battery ID': 'BAT017',
    'To-Do Datum': '2024-12-15',
    Aanleiding: 'Onderhoud',
    Merk: 'Nissan',
    Type: 'Leaf',
    Bouwjaar: 2018,
  },
  {
    'Battery ID': 'BAT018',
    'To-Do Datum': '2024-12-20',
    Aanleiding: 'Afwijking in actieradius',
    Merk: 'Hyundai',
    Type: 'Kona Electric',
    Bouwjaar: 2020,
  },
  {
    'Battery ID': 'BAT019',
    'To-Do Datum': '2025-01-05',
    Aanleiding: 'Accuwaarschuwing',
    Merk: 'Kia',
    Type: 'e-Niro',
    Bouwjaar: 2019,
  },
  {
    'Battery ID': 'BAT020',
    'To-Do Datum': '2025-01-15',
    Aanleiding: 'Oververhitting',
    Merk: 'Porsche',
    Type: 'Taycan',
    Bouwjaar: 2021,
  },
  {
    'Battery ID': 'BAT021',
    'To-Do Datum': '2025-01-20',
    Aanleiding: 'Periodieke controle',
    Merk: 'Mercedes-Benz',
    Type: 'EQC',
    Bouwjaar: 2020,
  },
  {
    'Battery ID': 'BAT022',
    'To-Do Datum': '2025-01-25',
    Aanleiding: 'Einde leaseperiode',
    Merk: 'Jaguar',
    Type: 'I-PACE',
    Bouwjaar: 2018,
  },
  {
    'Battery ID': 'BAT023',
    'To-Do Datum': '2025-02-01',
    Aanleiding: 'Aanrijding',
    Merk: 'Renault',
    Type: 'Zoe',
    Bouwjaar: 2017,
  },
  {
    'Battery ID': 'BAT024',
    'To-Do Datum': '2025-02-10',
    Aanleiding: 'Afwijkend laadgedrag',
    Merk: 'Peugeot',
    Type: 'e-208',
    Bouwjaar: 2021,
  },
];


function WorkLists() {

  const navigate = useNavigate();

  const handleMaakRapport = (row) => {
    console.log(`Maak rapport for Battery ID: ${row['Battery ID']}`);  
    navigate(`/reports/create/${row['Battery ID']}`);
  };

  return (

    <div className="mainWrapper" id='mainWorkListsWrapper'>

      <div className="outerBox" id="workListsBox">

      <div className="backToMenu">
      <Link to='/'>
      <p><img src={arrowBack} alt=""></img> Terug naar Menu</p>
      </Link>
      </div>

      <h1>Takenlijst</h1>
      <Table 
        headers={headers}
        data={data} 
        actionLabel="Maak Rapport"
        onActionClick={handleMaakRapport}
      />
      </div>

    </div>
    
  );
}

export default WorkLists;
