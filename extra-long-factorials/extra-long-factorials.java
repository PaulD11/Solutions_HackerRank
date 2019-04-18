import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Solution {

    static void extraLongFactorials(int n) {

      BigInteger bi1 = new BigInteger(String.valueOf(n));

        for(int i = 1; i < n; i++){
            BigInteger multiplier = new BigInteger(String.valueOf(i));
            bi1 = bi1.multiply(multiplier);
        }

      System.out.println(bi1);

    }

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        int n = scanner.nextInt();
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        extraLongFactorials(n);

        scanner.close();
    }
}
