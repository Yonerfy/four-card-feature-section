import { Card } from "./Card";
import { Title } from "./Title";
import iconCal from "../assets/icon-calculator.svg";
import iconKarma from "../assets/icon-karma.svg";
import iconSuper from "../assets/icon-supervisor.svg";
import iconTeam from "../assets/icon-team-builder.svg";

export const Container = () => {
    return (
        <>
            <div className="container">
                <div className="title-container flex justify-center">
                    <Title 
                        title="Reliable, efficient delivery"
                        subtitle="Powered by Technology"
                        paragraph="Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful"
                    />
                </div>
                <Card 
                    title="Team Builder"
                    description="Scans our talent network to create the optimal team for your project"
                    img={iconTeam}
                    borderColor="#EA5454"
                    gridArea="builder"
                />
                <Card 
                    title="Supervisor"
                    description="Monitors activity to identify project roadblocks"
                    img={iconSuper}
                    borderColor="#44D3D2"
                    gridArea="supervisor"
                />
                <Card 
                    title="Karma"
                    description="Regularly evaluates our talent to ensure quality"
                    img={iconKarma}
                    borderColor="#FCAE4A"
                    gridArea="karma"
                />
                <Card 
                    title="Calculator"
                    description="Uses data from past projects to provide better delivery estimates"
                    img={iconCal}
                    borderColor="#549EF2"
                    gridArea="calculator"
                />
        </div>
        </>
        
    )
}