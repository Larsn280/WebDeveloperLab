function CustomerCourseItem({ course }) {
  return (
    <div className="customerCourseItem-container">
      <div className="customerCourseItem-image">
        <img src="images/user.png" alt="courseImage" />
      </div>
      <div className="customerCourseItem-text">
        <div className="customerCourseItem-textOne">
          <h4>{course.courseTitle}</h4>
        </div>
        <div className="customerCourseItem-textTwo">
          <h4>KursNr: {course.courseNr}</h4>
          <h4>Längd: {course.courseLength}</h4>
        </div>
      </div>
    </div>
  );
}

export default CustomerCourseItem;
