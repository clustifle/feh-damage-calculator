function calculateDamage() {
    let atk = parseInt(document.getElementById("atk").value) || 0;
    let spd = parseInt(document.getElementById("spd").value) || 0;
    let def = parseInt(document.getElementById("def").value) || 0;
    let res = parseInt(document.getElementById("res").value) || 0;
    let defenderDef = parseInt(document.getElementById("defender-def").value) || 0;
    let defenderRes = parseInt(document.getElementById("defender-res").value) || 0;

    // Basic damage calculation formula (will expand later for skills, effects, etc.)
    let physicalDamage = Math.max(atk - defenderDef, 0);
    let magicalDamage = Math.max(atk - defenderRes, 0);

    document.getElementById("result").innerText = `Physical Damage: ${physicalDamage}, Magical Damage: ${magicalDamage}`;
}
