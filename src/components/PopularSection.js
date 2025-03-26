import c1 from "../assets/images/c1.jpg"
import c2 from "../assets/images/c2.jpg"
import c3 from "../assets/images/c3.jpg"
import c4 from "../assets/images/c4.jpg"

function PopularSection(){
    return(
        <div className="popular">
    <h1 className="popular__title">Most Popular</h1>
    <p className="popular__subtitle">Pick the best fit</p>
    <div className="popular__container">
        <div className="course-card">
        <img src={c1} alt="not found" loading="lazy"/>
            <h3>2025 Python Data Visualization MaterclassName</h3>
            <p>Col Steele</p>
            <p>4.9 ⭐⭐⭐⭐</p>
            <p>449 <del>1999</del></p>
    </div>

    <div className="course-card">
    <img src={c2} alt="not found" loading="lazy"/>
        <h3>Basic to Advance Programming with EMC</h3>
        <p>Col Steele</p>
        <p>3.9 ⭐⭐⭐</p>
        <p>449 <del>1999</del></p>
    </div>

    <div className="course-card">
    <img src={c3} alt="not found" loading="lazy"/>
        <h3>Web Development Bootcamp 2025</h3>
        <p>Col Steele</p>
        <p>4.9 ⭐⭐⭐⭐</p>
        <p>449 <del>1999</del></p>
    </div>

    <div className="course-card">
    <img src={c4} alt="not found" loading="lazy"/>
        <h3>Master UI/UX Designing with Figma</h3>
        <p>Col Steele</p>
        <p>4.9 ⭐⭐⭐⭐</p>
        <p>449 <del>1999</del></p>
    </div>

    <div className="course-card">
    <img src={c4} alt="not found" loading="lazy"/>
        <h3>Master UI/UX Designing with Figma</h3>
        <p>Col Steele</p>
        <p>4.9 ⭐⭐⭐⭐</p>
        <p>449 <del>1999</del></p>
    </div>

    <div className="course-card">
    <img src={c3} alt="not found" loading="lazy"/>
        <h3>Web Development Bootcamp 2025</h3>
        <p>Col Steele</p>
        <p>4.9 ⭐⭐⭐⭐</p>
        <p>449 <del>1999</del></p>
    </div>

    <div className="course-card">
    <img src={c2} alt="not found" loading="lazy"/>
        <h3>Basic to Advance Programming with EMC</h3>
        <p>Col Steele</p>
        <p>3.9 ⭐⭐⭐</p>
        <p>449 <del>1999</del></p>
    </div>
    
    <div className="course-card">
    <img src={c1} alt="not found" loading="lazy"/>
        <h3>2025 Python Data Visualization MaterclassName</h3>
        <p>Col Steele</p>
        <p>4.9 ⭐⭐⭐⭐</p>
        <p>449 <del>1999</del></p>
</div>
    </div>
</div>
    )
}

export default PopularSection