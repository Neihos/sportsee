import "../styles/components/SideBar.scss";
import zenIcon from '../assets/images/zenicon.svg'
import swimIcon from '../assets/images/swimIcon.svg'
import bikeIcon from '../assets/images/bikeIcon.svg'
import strongIcon from '../assets/images/strongIcon.svg'

export default function SideBar() {
  return (
    <nav className="sideBar">
      <div className="sideBar__space"></div>
      <img src={zenIcon} alt="" />
      <img src={swimIcon} alt="" />
      <img src={bikeIcon} alt="" />
      <img src={strongIcon} alt="" />
      <small className="sideBar__copyright">Copyright, SportSee 2020</small>
    </nav>
  );
}
