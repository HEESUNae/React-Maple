import { useAppSelector } from '../../store/hooks';
import { StyledEquipmentList } from './style';
import Bedge, { BedgeType } from '../bedge';

export type EquipmentType = {
  item_equipment_part: string;
  item_icon: string;
  item_name: string;
  starforce: string;
  potential_option_1: string;
  potential_option_2: string;
  potential_option_3: string;
  potential_option_grade: BedgeType;
};

const EquipmentList = () => {
  const equipmentList = useAppSelector((state) => state.equipment.equipmentList);

  return (
    <StyledEquipmentList>
      {equipmentList.map((item: EquipmentType) => (
        <li key={item.item_name}>
          <p className="list-title">{item.item_equipment_part}</p>
          <div className="info">
            <figure>
              <img src={item.item_icon} alt="" width={40} height={40} />
            </figure>
            <div className="grade">
              {item.potential_option_grade !== null && (
                <Bedge name={item.potential_option_grade} starforce={item.starforce} />
              )}
            </div>
            <p className="item-name">{item.item_name}</p>
            <ul className="item-options">
              <li>{item.potential_option_1}</li>
              <li>{item.potential_option_2}</li>
              <li>{item.potential_option_3}</li>
            </ul>
          </div>
        </li>
      ))}
    </StyledEquipmentList>
  );
};

export default EquipmentList;
