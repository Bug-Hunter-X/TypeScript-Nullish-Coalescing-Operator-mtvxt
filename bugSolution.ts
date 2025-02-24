function printName(name: string | null | undefined): void {
  console.log((name ?? 'Unknown').toUpperCase());
}

printName(null); // Output: UNKNOWN
printName('John'); // Output: JOHN
printName(undefined); // Output: UNKNOWN