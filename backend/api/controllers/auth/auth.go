package auth

import (
    "reflect"
    "testing"
    "github.com/caracal/database"
    "golang.org/x/crypto/bcrypt"
)

func TestHashPassword(t *testing.T) {
    password := "testpassword"
    hashedPassword, err := HashPassword(password)
    if err != nil {
        t.Fatalf("Error hashing password: %v", err)
    }

    err = bcrypt.CompareHashAndPassword([]byte(hashedPassword), []byte(password))
    if err != nil {
        t.Fatalf("Hashed password does not match original password")
    }
}

func TestNewAuthController(t *testing.T) {
    db := &database.Repository{}
    got := NewAuthController(db)
    if reflect.TypeOf(got) != reflect.TypeOf(&AuthController{}) {
        t.Errorf("NewAuthController() = %v, want %v", got, &AuthController{})
    }
}