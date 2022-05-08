import React from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";
import "./Navbar.scss";

const Navbar = ({ setShowNav }) => {
    return (
        <div className="revisit__header">
            <div className="left">
                <FaBars
                    className="revisit__header__menu"
                    size={26}
                    onClick={() => setShowNav((prevValue) => !prevValue)}
                />
                <p className="brand__name">Revisit</p>
            </div>

            <div className="brand">
                {/* <img
                    src="https://i.ibb.co/SvwtRRk/Video-Library-Logo.png"
                    alt="logo"
                    className="revisit__header__logo"
                /> */}
            </div>

            <form>
                <input type="text" placeholder="Search here" />
                <button type="submit">
                    <AiOutlineSearch size={22} />
                </button>
            </form>

            <div className="revisit__header__icons">
                <MdNotifications size={28} />
                <MdApps size={28} />
                <img
                    src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
                    alt="avatar"
                />
            </div>
        </div>
    );
};

export default Navbar;
