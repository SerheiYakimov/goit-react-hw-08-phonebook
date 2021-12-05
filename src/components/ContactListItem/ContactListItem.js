import PropsType from "prop-types";
import s from "../ContactListItem/ContactListItem.module.css";
import { useDispatch } from "react-redux";
import { deleteThunkContact } from "../../redux/phonebook/phonebook-operations";
// import { useDeleteContactMutation } from "../../redux/auth/slices"; - rtk q


export function ContactListItem({ id, name, number }) {
  const dispatch = useDispatch();
  // const [deleteContact] = useDeleteContactMutation(); - rtk q
  
  return (
    <li className={s.list}>
      <p className={s.item}>
        {name}:<span className={s.span}>{number}</span>
      </p>
      <button
        type="submit"
        onClick={() => dispatch(deleteThunkContact(id))}
        // onClick={() => deleteContact(id)} - rtk quwery
      >
        Delete
      </button>
    </li>
  );
}

ContactListItem.PropsTypes = {
  id: PropsType.number.isRequired,
  name: PropsType.string.isRequired,
  number: PropsType.number.isRequired,
  onDeleteContact: PropsType.func.isRequired,
};


