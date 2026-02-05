export class DataHelpers {
    /**
     * Generate a random string with specified length
     */
    static randomString(length: number = 10): string {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }

    /**
     * Generate a random email address
     */
    static randomEmail(): string {
        const username = this.randomString(8).toLowerCase();
        const domains = ['gmail.com', 'yahoo.com', 'outlook.com', 'test.com'];
        const domain = domains[Math.floor(Math.random() * domains.length)];
        return `${username}@${domain}`;
    }

    /**
     * Generate a random number within a range
     */
    static randomNumber(min: number = 0, max: number = 100): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /**
     * Generate a random phone number
     */
    static randomPhone(): string {
        const areaCode = this.randomNumber(200, 999);
        const firstPart = this.randomNumber(200, 999);
        const secondPart = this.randomNumber(1000, 9999);
        return `${areaCode}-${firstPart}-${secondPart}`;
    }

    /**
     * Generate a random name
     */
    static randomName(): string {
        const firstNames = ['John', 'Jane', 'Alex', 'Sarah', 'Michael', 'Emma', 'David', 'Lisa', 'Robert', 'Maria'];
        const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez'];
        
        const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
        const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
        
        return `${firstName} ${lastName}`;
    }

    /**
     * Generate a random date between two dates
     */
    static randomDate(start: Date = new Date(2020, 0, 1), end: Date = new Date()): Date {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

    /**
     * Generate a random boolean
     */
    static randomBoolean(): boolean {
        return Math.random() < 0.5;
    }

    /**
     * Pick a random element from an array
     */
    static randomFromArray<T>(array: T[]): T {
        return array[Math.floor(Math.random() * array.length)];
    }

    /**
     * Generate a random price
     */
    static randomPrice(min: number = 10, max: number = 1000): string {
        const price = (Math.random() * (max - min) + min).toFixed(2);
        return price;
    }

    /**
     * Generate a timestamp-based unique ID
     */
    static uniqueId(): string {
        return `${Date.now()}-${this.randomString(5)}`;
    }
}
