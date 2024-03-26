import s from "../StylesJSX/Header.module.css";
import { Link } from "react-router-dom";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
function Header() {
  return (
    <>
      <header className={s.head}>
        <div className={s.megaBlock}>
          <div>
            <img src="./src/assets/logo-black 1.png" alt="" />
          </div>
          <div className={s.row}>
          <Link className={s.Link} to={"/"}>
                  Персонажи
                </Link>
                <Link className={s.Link} to={"/locations"}>
              Локации
            </Link>
            <Link className={s.Link} to={"/episode"}>
                  Эпизоды
               </Link>
          </div>
          <div className={s.burger}>
          <Menu>
            <MenuButton>Подробнее</MenuButton>
            <MenuList>
              <MenuItem>
                <Link className={s.Link} to={"/"}>
                  Персонажи
                </Link>
              </MenuItem>
              <MenuItem>
              <Link className={s.Link} to={"/locations"}>
              Локации
            </Link>
              </MenuItem>
              <MenuItem>
                <Link className={s.Link} to={"/episode"}>
                  Эпизоды
               </Link>
              </MenuItem>
            </MenuList>
          </Menu>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
