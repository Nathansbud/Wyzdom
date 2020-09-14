conversion = {
    "a": {"output": "Pounds to Newtons", "conversion": lambda lbs: 4.4482216*lbs, "from":"lb", "to":"N"},
    "b": {"output": "BTUs to Joules", "conversion": lambda btus: 1055.06 * btus, "from": "BTU", "to": "J"},
    "c": {"output": "Pascals to Millimeters of Mercury", "conversion": lambda pascals: 0.00750062 * pascals, "from":"P", "to":"mmm"},
    "d": {"output": "Seconds per revolution to Hertz", "conversion": lambda spr: 1/spr if spr != 0 else 0, "from":"s/rev", "to": "Hz"},
    "e": {"output": "Miles per Hour to Meters per Second", "conversion": lambda mph: mph / 2.237, "from": "mph", "to":"m/s"},
    "f": {"output": "Fahrenheit to Celsius", "conversion": lambda f: (f - 32) * 5/9, "from": "°F", "to": "°C"},
    "h": {"output": "Pounds to Slugs", "conversion": lambda lbs: lbs / 32.174, "from": "lbf", "to":"slugs"}
}

for key, data in conversion.items(): print(f"{key}: {data['output']}")

selection = input("Select one of the following conversions by letter: ").lower().strip()
if selection in conversion:
    from_unit, to_unit, output, fn = [conversion[selection][key] for key in ['from', 'to', 'output', 'conversion']]
    print(f"Convert {output}")
    try:
        amount = float(input(f"Input ({from_unit}): "))
        print(f"Conversion: {amount}{from_unit} : {fn(amount)}{to_unit}")
    except ValueError:
        print("Invalid amount!")
else: 
    print("Selection must be one of the above options [a-f; h]")