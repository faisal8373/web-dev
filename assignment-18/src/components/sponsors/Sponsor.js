import cloudbees from './assets/cloudbees.png'
import osuosl from './assets/osuosl.png'
import cdf from './assets/cdf.png'
import redhat from './assets/redhat.png'
import aws from './assets/aws.png'
import github from './assets/github.png'
import jfrog from './assets/jfrog.png'
import './sponsor.css'


function Sponsor(){

    return(
<div className='sponsor'>
<img src={cloudbees} alt='CloudBees'/>
<img src={osuosl} alt='Osuosl'/>
<img src={cdf} alt='CDF'/>
<img src={redhat} alt='Redhat'/>
<img src={aws} alt='AWS'/>
<br/>
<br/>
<br/>
<img className='pad' src={github} alt='Github'/>
<img src={jfrog} alt='Jfrog'/>
<p>We thank the following organizations for their support of the Jenkins project through free and/or open source licensing programs.
</p>
<div className='list'>
<ul>
    <li>Atlassian</li>
    <li>Datadog</li>
    <li>Mac</li>
    <li>Cloud</li>
    <li>PagerDuty</li>
    <li>Sentry</li>
    <li>XMission</li>
    <li>Tsinghua</li>
    <li>University</li>
    <li>Fastly</li>

</ul>
       </div> 
</div>
    );
}
export default Sponsor;
