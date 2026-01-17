export const _0x1a2b = "UEFSQURPWCBBUkNISVRFQ1Q="; // Base64 for "PARADOX ARCHITECT"

export const verifyIdentity = () => {
    try {
        const decoded = atob(_0x1a2b);
        if (decoded === "PARADOX ARCHITECT") {
            const style = "background: #000; color: #00ff00; font-size: 12px; padding: 10px; border: 1px solid #00ff00;";
            console.log("%c SYSTEM SECURE. DEVELOPED BY THE PARADOX ARCHITECT. ", style);
            return true;
        }
        return false;
    } catch (e) {
        return false;
    }
};

export const getSignature = () => {
    return atob(_0x1a2b);
};
