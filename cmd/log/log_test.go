package log

import (
	"os"
	"reflect"
	"testing"
	"time"
)

func TestLog_ReadWrite(t *testing.T) {
	entry0 := NewEntry("1", "some activity", time.Second.String(), time.Now().Format(time.RFC3339))
	entry1 := NewEntry("2", "some activity", time.Second.String(), time.Now().Format(time.RFC3339))
	entry2 := NewEntry("3", "some activity", time.Second.String(), time.Now().Format(time.RFC3339))

	var entries []*Entry
	entries = append(entries, entry0)
	entries = append(entries, entry1)
	entries = append(entries, entry2)

	log1 := NewLog(entries)

	log1.Write()

	l1 := log1.Logs[0]

	if _, err := os.Stat("store/activity-log.json"); err != nil {
		t.Errorf("log not present in file system")
	}

	var empty []*Entry
	log2 := NewLog(empty)

	log1.Write()
	log2.Read()
	l2 := log2.Logs[0]

	if !reflect.DeepEqual(l1, l2) {
		t.Errorf("logs not the same")
	}
}
