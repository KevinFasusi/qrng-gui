package control

import (
	"fmt"
	"testing"
)

func TestControl_GenerateKeys(t *testing.T) {
	d := NewQrngCli()
	p := d.GenerateKeys(10, 128)
	fmt.Printf("%v", p)
}

func TestControl_GenerateIntegers(t *testing.T) {
	d := NewQrngCli()
	p := d.GenerateIntegers(10)
	fmt.Printf("%v", p)
}

func TestControl_GenerateSha25(t *testing.T) {
	d := NewQrngCli()
	p := d.GenerateSha256(10, 128)
	fmt.Printf("%v", p)
}

func TestControl_RetrieveUsbDevices(t *testing.T) {
	d := NewQrngCli()
	devices := d.GetUsbDevices()
	fmt.Printf("%v", devices)
}

func TestControl_GetSummary(t *testing.T) {
	d := NewQrngCli()
	devices := d.GetSummary()
	fmt.Printf("%v", devices)
}
