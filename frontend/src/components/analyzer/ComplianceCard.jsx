import { CheckCircle2, XCircle } from "lucide-react";
import SectionCard from "../common/SectionCard";

function ComplianceCard({ compliance, password }) {

    if (!password) return null;

    const items = [
        {
            label: "OWASP Password Policy",
            passed: compliance.owasp,
        },
        {
            label: "NIST SP 800-63B",
            passed: compliance.nist,
        },
        {
            label: "Enterprise Policy",
            passed: compliance.enterprise,
        },
        {
            label: "Strong Entropy",
            passed: compliance.strongEntropy,
        },
        {
            label: "Character Diversity",
            passed: compliance.characterDiversity,
        },
    ];

    return (
        <SectionCard title="Compliance">

            {items.map((item) => (

                <div
                    className="compliance-item"
                    key={item.label}
                >

                    <div className="compliance-left">

                        {item.passed ? (
                            <CheckCircle2
                                color="#22c55e"
                                size={20}
                            />
                        ) : (
                            <XCircle
                                color="#ef4444"
                                size={20}
                            />
                        )}

                        <span>{item.label}</span>

                    </div>

                </div>

            ))}

        </SectionCard>
    );
}

export default ComplianceCard;