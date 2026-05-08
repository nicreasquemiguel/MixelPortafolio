import harvard from '../../assets/logos/harvard.png'
import ibm from '../../assets/logos/ibm.png'
import meta from '../../assets/logos/meta.png'
import google from '../../assets/logos/google.png'
import aws from '../../assets/logos/aws.svg'
import ListCard from './ListCard'

const Courses = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <ListCard title="Harvard University" desc="Computer Science CS50x" logo={harvard} size={60} link="https://certificates.cs50.io/37a2ee08-bbb2-4110-b440-e3ab7dd87f12.pdf" />
      <ListCard title="Harvard University" desc="Introduction to Python CS50" logo={harvard} size={60} link="https://certificates.cs50.io/9545123c-fdac-4a34-8a34-e3f58f6ebd86" />
      <ListCard title="Meta" desc="Backend Development" logo={meta} size={60} link="https://coursera.org/verify/professional-cert/ZX632WQ4DVPS" />
      <ListCard title="IBM" desc="FullStack Software Development" logo={ibm} size={60} link="https://coursera.org/share/55f9b1b030ba2c29fac969883f8a095c" />
      <ListCard title="Google" desc="IT Support" logo={google} size={60} link="https://coursera.org/share/2fb0a5f1724accddacda08458b1041e9" />
      <ListCard title="Amazon Web Services" desc="Containerized Applications on AWS" logo={aws} size={60} link="https://www.coursera.org/account/accomplishments/verify/IF72NSA9BW84" />
      <ListCard title="IBM" desc="Introduction to Data Engineering" logo={ibm} size={60} link="https://www.coursera.org/account/accomplishments/verify/N9C1M1MTJOWY" />
    </div>
  )
}

export default Courses
