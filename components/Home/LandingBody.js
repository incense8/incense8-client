import classes from "../style/Mainbody.module.css";
function LandingBody() {
  return (
    <div className={classes.Mainbody}>
      <div>
        <div className={classes.Content}>
          <h1>Heading of the desk</h1>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
              in? Consequatur laudantium tempora vero. Architecto quos ut eius
              quod, laboriosam ipsa vitae repudiandae dicta ducimus explicabo
              quae dolorum dolore magni modi vero non commodi? Cupiditate atque
              nam dolores fugit recusandae, eius perspiciatis nemo quia
              dignissimos, saepe, itaque quam repellendus? Provident.
            </p>
          </div>
        </div>
      </div>
      <img src="illustration.png" alt="" />
      <div className={classes.Mainbackgroundimage}>
        <img src="Mainbackground.png" alt="" />
      </div>
    </div>
  );
}
export default LandingBody;
