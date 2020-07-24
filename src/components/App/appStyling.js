import { makeStyles } from "@material-ui/core/styles";
import Image from "../../Images/purple-pink-sky-unsplash.jpg";

const useStyles = makeStyles({
  wrapper: {
    backgroundImage: `url(${Image})`
  }
});

export default useStyles;
