import PropsType from "prop-types";
import s from "../Filter/Filter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { handleFilter } from "../../redux/phonebook/phonebook-actions";
import { getFilter } from "../../redux/phonebook/phonebook-selectors";

export function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  return (
    <div className={s.container}>
      <h3 className={s.title}>Find contacts by name:</h3>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={(e) => dispatch(handleFilter(e.target.value))}
        className={s.input}
      />
    </div>
  );
}

Filter.PropsType = {
  value: PropsType.string,
  onChange: PropsType.func.isRequired,
};
