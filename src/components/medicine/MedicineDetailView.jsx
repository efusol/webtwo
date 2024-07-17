import React from 'react';
import MedicineDetail from './medicineproducts/MedicineDetail';
import { useLocation } from 'react-router';
import MedicineTop2 from './medicinecommon/MedicineTop2';

const MedicineDetailView = () => {
  const location = useLocation()
  const { item } = location.state

  return (
    <div>
      <MedicineTop2 />
      <MedicineDetail item={item} />
    </div>
  );
};

export default MedicineDetailView;