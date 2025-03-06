function calculateDamage() {
    let atk = parseInt(document.getElementById("atk").value) || 0;
    let spd = parseInt(document.getElementById("spd").value) || 0;
    let def = parseInt(document.getElementById("def").value) || 0;
    let res = parseInt(document.getElementById("res").value) || 0;
    let defenderDef = parseInt(document.getElementById("defender-def").value) || 0;
    let defenderRes = parseInt(document.getElementById("defender-res").value) || 0;

    let physicalDamage = Math.max(atk - defenderDef, 0);
    let magicalDamage = Math.max(atk - defenderRes, 0);

    document.getElementById("result").innerText = `Physical Damage: ${physicalDamage}, Magical Damage: ${magicalDamage}`;
}

function simulateCombat() {
    let log = document.getElementById("combat-log");
    log.innerHTML = "Starting combat simulation...<br>";
    
    setTimeout(() => {
        log.innerHTML += "Attacker strikes!<br>";
        setTimeout(() => {
            log.innerHTML += "Defender counters!<br>";
            setTimeout(() => {
                log.innerHTML += "Combat ends.<br>";
            }, 1000);
        }, 1000);
    }, 1000);
}

function optimizeBuild() {
    let result = document.getElementById("optimization-result");
    result.innerText = "AI suggests: +ATK IV, use Special Spiral, stack Atk/Spd boosts.";
}
