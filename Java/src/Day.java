public enum Day {
    MONDAY(1), THUESDAY(2), WEDNESDAY(3), THURSDAY(4), FRIDAY(5), SATURDAY(6), SUNDAY(7);

    private final int number;

    Day (int number){
        this.number = number;
    }

    public int getNumber() {
        return this.number;
    }
}
