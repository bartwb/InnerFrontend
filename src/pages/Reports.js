import React from "react";
import { Link } from "react-router-dom";
import "./styling/workLists.css";
import logo from './assets/logo.svg';
import arrowBack from './assets/arrow-left.svg';
import Table from "../components/Table";

const headers = ['Battery ID', 'Datum', 'Resultaat', 'Aanleiding', 'Merk', 'Type'];

// Dummy data
const data = [
  {
    'Battery ID': 'BAT001',
    'Datum': '2024-11-20',
    Resultaat: 'Afgekeurd',
    Aanleiding: 'Ongeval',
    Merk: 'Audi',
    Type: 'E-Tron',
  },
  {
    'Battery ID': 'BAT002',
    'Datum': '2024-11-22',
    Resultaat: 'Risico',
    Aanleiding: 'Doorverkoop',
    Merk: 'BMW',
    Type: 'I3',
  },
  {
    'Battery ID': 'BAT003',
    'Datum': '2024-12-01',
    Resultaat: 'Goed',
    Aanleiding: 'Leeftijd',
    Merk: 'Volkswagen',
    Type: 'E-Golf',
  },
  {
    'Battery ID': 'BAT004',
    'Datum': '2024-12-10',
    Resultaat: 'Uitstekend',
    Aanleiding: 'Ongeval',
    Merk: 'Tesla',
    Type: 'Model 3',
  },
  {
    'Battery ID': 'BAT005',
    'Datum': '2024-12-15',
    Resultaat: 'Afgekeurd',
    Aanleiding: 'Onderhoud',
    Merk: 'Nissan',
    Type: 'Leaf',
  },
  {
    'Battery ID': 'BAT006',
    'Datum': '2024-12-20',
    Resultaat: 'Risico',
    Aanleiding: 'Afwijking in actieradius',
    Merk: 'Hyundai',
    Type: 'Kona Electric',
  },
  {
    'Battery ID': 'BAT007',
    'Datum': '2025-01-05',
    Resultaat: 'Goed',
    Aanleiding: 'Accuwaarschuwing',
    Merk: 'Kia',
    Type: 'e-Niro',
  },
  {
    'Battery ID': 'BAT008',
    'Datum': '2025-01-15',
    Resultaat: 'Uitstekend',
    Aanleiding: 'Oververhitting',
    Merk: 'Porsche',
    Type: 'Taycan',
  },
  {
    'Battery ID': 'BAT009',
    'Datum': '2025-01-20',
    Resultaat: 'Afgekeurd',
    Aanleiding: 'Periodieke controle',
    Merk: 'Mercedes-Benz',
    Type: 'EQC',
  },
  {
    'Battery ID': 'BAT010',
    'Datum': '2025-01-25',
    Resultaat: 'Risico',
    Aanleiding: 'Einde leaseperiode',
    Merk: 'Jaguar',
    Type: 'I-PACE',
  },
  {
    'Battery ID': 'BAT011',
    'Datum': '2025-02-01',
    Resultaat: 'Goed',
    Aanleiding: 'Aanrijding',
    Merk: 'Renault',
    Type: 'Zoe',
  },
  {
    'Battery ID': 'BAT012',
    'Datum': '2025-02-10',
    Resultaat: 'Uitstekend',
    Aanleiding: 'Afwijkend laadgedrag',
    Merk: 'Peugeot',
    Type: 'e-208',
  },
];

const handleBekijkRapport = (row) => {
  console.log(`Bekijk rapport for Battery ID: ${row['Battery ID']}`);  
};


function Reports() {

  return (

    <div className="mainWrapper" id='mainWorkListsWrapper'>

      <div className="outerBox" id="workListsBox">

      <div className="backToMenu">
      <Link to='/'>
      <p><img src={arrowBack} alt=""></img> Terug naar Menu</p>
      </Link>
      </div>

      <h1>Rapportages</h1>
      <Table 
        headers={headers}
        data={data} 
        actionLabel="Bekijk Rapport"
        onActionClick={handleBekijkRapport}
      />
      </div>

    </div>
    
  );
}

export default Reports;
